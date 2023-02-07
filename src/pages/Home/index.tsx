import Achievement from '../../templates/Achievement';
import HeroHeader from '../../templates/HeroHeader';
import PopularQuiz from '../../templates/PopularQuiz';
import RecentQuiz from '../../templates/RecentQuiz';

export default function Home() {
  return (
    <>
      <HeroHeader username="Jessica" />
      <main>
        <Achievement />
        <RecentQuiz />
        <PopularQuiz />
      </main>
    </>
  );
}
