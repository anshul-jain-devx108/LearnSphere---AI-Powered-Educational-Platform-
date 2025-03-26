import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PaperclipIcon, Image, Send, MessageSquare, X, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type PostType = "text" | "notice" | "media";
type Attachment = { type: "image" | "file"; url: string; name: string };

interface Post {
  id: string;
  content: string;
  author: string;
  timestamp: Date;
  type: PostType;
  attachments: Attachment[];
  comments: Comment[];
}

interface Comment {
  id: string;
  content: string;
  author: string;
  timestamp: Date;
}

export const StreamTab = () => {
  const [postContent, setPostContent] = useState("");
  const [postType, setPostType] = useState<PostType>("text");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [showAttachmentInput, setShowAttachmentInput] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      content: "Remember to prepare for tomorrow's discussion on Chapter 5.",
      author: "Dr. Sarah Johnson",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      type: "notice",
      attachments: [],
      comments: [],
    },
  ]);
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handlePostSubmit = () => {
    if (!postContent.trim()) {
      toast({
        title: "Error",
        description: "Post content cannot be empty",
        variant: "destructive",
      });
      return;
    }

    if (editingPostId) {
      setPosts(
        posts.map((post) => {
          if (post.id === editingPostId) {
            return {
              ...post,
              content: postContent,
              type: postType,
              attachments: [...attachments],
            };
          }
          return post;
        })
      );
      
      setEditingPostId(null);
      toast({
        title: "Success",
        description: "Post updated successfully",
      });
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        content: postContent,
        author: "Dr. Sarah Johnson",
        timestamp: new Date(),
        type: postType,
        attachments: [...attachments],
        comments: [],
      };

      setPosts([newPost, ...posts]);
      toast({
        title: "Success",
        description: "Post published successfully",
      });
    }

    setPostContent("");
    setAttachments([]);
    setPostType("text");
  };

  const handleEditPost = (post: Post) => {
    setPostContent(post.content);
    setPostType(post.type);
    setAttachments([...post.attachments]);
    setEditingPostId(post.id);
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeletePost = (postId: string) => {
    setPostToDelete(postId);
    setDeleteDialogOpen(true);
  };

  const confirmDeletePost = () => {
    if (postToDelete) {
      setPosts(posts.filter((post) => post.id !== postToDelete));
      setDeleteDialogOpen(false);
      setPostToDelete(null);
      
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
    }
  };

  const cancelEditPost = () => {
    setEditingPostId(null);
    setPostContent("");
    setAttachments([]);
    setPostType("text");
  };

  const handleAttachmentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const isImage = file.type.startsWith("image/");
    const attachment: Attachment = {
      type: isImage ? "image" : "file",
      url: URL.createObjectURL(file),
      name: file.name,
    };

    setAttachments([...attachments, attachment]);
    setShowAttachmentInput(false);
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const handleCommentSubmit = (postId: string) => {
    const commentContent = commentInputs[postId];
    if (!commentContent?.trim()) return;

    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                id: Date.now().toString(),
                content: commentContent,
                author: "Dr. Sarah Johnson",
                timestamp: new Date(),
              },
            ],
          };
        }
        return post;
      })
    );

    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  const renderAttachments = (postAttachments: Attachment[]) => {
    return (
      <div className="mt-3 space-y-2">
        {postAttachments.map((attachment, index) => (
          <div key={index} className="rounded-md bg-gray-50 dark:bg-gray-800 p-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {attachment.type === "image" ? (
                <Image size={18} className="text-blue-500" />
              ) : (
                <PaperclipIcon size={18} className="text-blue-500" />
              )}
              <span className="text-sm">{attachment.name}</span>
            </div>
            {!posts.some(post => post.attachments.includes(attachment)) && (
              <button onClick={() => removeAttachment(index)} className="text-gray-500 hover:text-red-500">
                <X size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? "s" : ""} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" alt="Teacher" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {editingPostId ? "Edit Post" : "Create Post"}
                  </h3>
                  {editingPostId && (
                    <Button variant="ghost" size="sm" onClick={cancelEditPost}>
                      <X size={16} className="mr-1" />
                      Cancel
                    </Button>
                  )}
                </div>
                <Textarea
                  placeholder="Share something with your class..."
                  className="flex-1"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                
                {renderAttachments(attachments)}
                
                {showAttachmentInput && (
                  <div className="mt-2">
                    <Input
                      type="file"
                      onChange={handleAttachmentUpload}
                      className="text-sm"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAttachmentInput(!showAttachmentInput)}
                    >
                      <PaperclipIcon size={18} className="mr-1" />
                      Attach
                    </Button>
                    <div className="flex border rounded-md overflow-hidden">
                      <Button
                        variant={postType === "text" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setPostType("text")}
                        className="rounded-none"
                      >
                        Text
                      </Button>
                      <Button
                        variant={postType === "notice" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setPostType("notice")}
                        className="rounded-none"
                      >
                        Notice
                      </Button>
                      <Button
                        variant={postType === "media" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setPostType("media")}
                        className="rounded-none"
                      >
                        Media
                      </Button>
                    </div>
                  </div>
                  <Button onClick={handlePostSubmit}>
                    <Send size={18} className="mr-1" />
                    {editingPostId ? "Update" : "Post"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium dark:text-white">{post.author}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{post.content}</p>
                    
                    {post.attachments.length > 0 && renderAttachments(post.attachments)}
                    
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <MessageSquare size={16} className="mr-1" />
                          <span className="text-xs">{post.comments.length} Comments</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleEditPost(post)}
                            className="h-8 px-2 text-gray-500 hover:text-blue-500"
                          >
                            <Edit size={16} />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeletePost(post.id)}
                            className="h-8 px-2 text-gray-500 hover:text-red-500"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      {post.comments.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {post.comments.map((comment) => (
                            <div key={comment.id} className="flex items-start gap-2 bg-gray-50 dark:bg-gray-900 p-2 rounded-md">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src="/placeholder.svg" alt={comment.author} />
                                <AvatarFallback>{comment.author[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-medium">{comment.author}</span>
                                  <span className="text-xs text-gray-500">{formatTimestamp(comment.timestamp)}</span>
                                </div>
                                <p className="text-sm mt-0.5">{comment.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-3 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg" alt="You" />
                          <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                        <Input
                          placeholder="Add a comment..."
                          className="text-sm h-8"
                          value={commentInputs[post.id] || ""}
                          onChange={(e) => setCommentInputs({...commentInputs, [post.id]: e.target.value})}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleCommentSubmit(post.id);
                            }
                          }}
                        />
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => handleCommentSubmit(post.id)}
                        >
                          <Send size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{formatTimestamp(post.timestamp)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this post and all its comments. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeletePost} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
