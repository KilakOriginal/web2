import { useState, useEffect } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export function ProfileCard(content: any, name: string, picture?: string, description?: string) {
    const [isLoadingImg, setIsLoadingImg] = useState(true);

    useEffect(() => {
        if (picture) {
            const img = new Image();
            img.src = picture;
            img.onload = () => setIsLoadingImg(false);
            img.onerror = () => setIsLoadingImg(false);
        } else {
            setIsLoadingImg(false);
        }
    }, [picture]);

    return (
        <Card className="profile-card">
            <CardHeader className="profile-card-header">
                {isLoadingImg ? (
                    <Skeleton className="w-16 h-16 rounded-full" />
                ) : (
                    <Avatar className="profile-card-avatar">
                        <AvatarImage src={picture} alt="Profile picture" />
                        <AvatarFallback>
                            <FontAwesomeIcon icon={faUser} />
                        </AvatarFallback>
                    </Avatar>
                )}
                <div className="profile-card-header-text">
                    <CardTitle className="profile-card-title">{name}</CardTitle>
                    <CardDescription className="profile-card-description">{description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="profile-card-content">
                {content}
            </CardContent>
        </Card>
    );
}