"use client"
import { PageComponent } from "@/components/pageComponent";
import { PostTemplate } from "@/components/PostTemplate";
import { TweetComposer } from "@/components/ui/tweetComposer";
import { TweetsContext } from "@/hooks/ManageState/context";

export default function Home() {
    // const { tweets} = useContext(MyContext)
    const { tweets } = TweetsContext()
 
  return (
    <>
      <PageComponent>
        <TweetComposer/>
        <div>
          <PostTemplate tweet={tweets}/>
          
        </div>
      </PageComponent>
      
    </>
  );
}
