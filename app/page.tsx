"use client"
import { PageComponent } from "@/components/pageComponent";
import { PostTemplate } from "@/components/PostTemplate";
import { Header } from "@/components/ui/header";
import { TweetComposer } from "@/components/ui/tweetComposer";
import { TweetsContext } from "@/hooks/context";
import Link from "next/link";


export default function Home() {
  const { tweets } = TweetsContext();
 
  return (
    <>
      <PageComponent >
        <Header border={true}>
          <div className="w-full h-full flex">
            <div className="w-full h-full flex items-center justify-center font-medium hover:bg-gray-100 ">For you</div>
            <div className="w-full h-full flex items-center justify-center font-medium hover:bg-gray-100">Following</div>
          </div>
        </Header>
        <TweetComposer/>
        <div>
          {tweets.map((post) => (
            <div key={post.id}>
              <Link href={`/postPage/${post.id}`}>
                <PostTemplate 
                tweet={post.content} 
                image={'https://imageio.forbes.com/specials-images/dam/imageserve/930116744/960x0.jpg?height=473&width=711&fit=bounds'}/>
                </Link>
            </div>
          ))}
        </div>
      </PageComponent>
      
    </>
  );
}
