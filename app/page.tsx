"use client"
import { PageComponent } from "@/components/pageComponent";
import { PostTemplate } from "@/components/PostTemplate";
import { TweetComposer } from "@/components/ui/tweetComposer";
import { TweetsContext } from "@/hooks/ManageState/context";


export default function Home() {
  const { tweets } = TweetsContext();
  console.log('Objeto tweet',tweets)
    // const [state, setState] = useState<TweetsType[]>([{ id: 1 , content:'Hello'}])
 
  return (
    <>
      <PageComponent>
        <TweetComposer/>
        <div>
          {/* {tweets.map((post) => (
            <div key={post.id}>
              <PostTemplate tweet={post.content}/>
            </div>
          ))} */}
        </div>
      </PageComponent>
      
    </>
  );
}
