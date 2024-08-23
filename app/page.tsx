import { PageComponent } from "@/components/pageComponent";
import { PostTemplate } from "@/components/PostTemplate";
import { TweetComposer } from "@/components/ui/tweetComposer";

export default function Home() {
  return (
    <>
      <PageComponent>
        <TweetComposer/>
        <div>
          <PostTemplate tweet={'Hello'}/>
          
        </div>
      </PageComponent>
      
    </>
  );
}
