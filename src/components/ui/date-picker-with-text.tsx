
import * as React from "react";
import { format, addDays, isValid, parse } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface DatePickerWithTextProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  placeholderText?: string;
  className?: string;
}

export function DatePickerWithText({
  date,
  setDate,
  placeholderText = "Select or type date...",
  className,
}: DatePickerWithTextProps) {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);

  // Update input value when date changes externally
  React.useEffect(() => {
    if (date) {
      setInputValue(format(date, "PPP"));
    } else {
      setInputValue("");
    }
  }, [date]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Handle relative date inputs
    if (value.trim().toLowerCase() === "today") {
      setDate(new Date());
      return;
    }
    
    if (value.trim().toLowerCase() === "tomorrow") {
      setDate(addDays(new Date(), 1));
      return;
    }
    
    // Handle "in X days" format
    const inDaysMatch = value.trim().toLowerCase().match(/^in\s+(\d+)\s+days?$/);
    if (inDaysMatch && inDaysMatch[1]) {
      const days = parseInt(inDaysMatch[1], 10);
      if (!isNaN(days)) {
        setDate(addDays(new Date(), days));
        return;
      }
    }
    
    // Try parsing as a date
    const parsedDate = parse(value, "PPP", new Date());
    if (isValid(parsedDate)) {
      setDate(parsedDate);
    }
  };

  const handleInputBlur = () => {
    // If input is empty, clear the date
    if (!inputValue.trim()) {
      setDate(undefined);
      return;
    }
    
    // If input doesn't match any patterns and isn't a valid date,
    // revert to the current date display
    if (date) {
      setInputValue(format(date, "PPP"));
    } else {
      setInputValue("");
    }
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
            aria-label="Open calendar"
          >
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              setOpen(false);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder={placeholderText}
        className="flex-1"
      />
    </div>
  );
}
