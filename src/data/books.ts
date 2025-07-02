import { Book, BookCategory, ReadingStatus } from "../models/Book";
import booksData from "./books.json";

// Book Cover Images
import uxMagic from "../assets/books/UX Magic.png";
import tippingPoint from "../assets/books/Tipping Point.png";
import thinkingFastAndSlow from "../assets/books/Thinking fast and slow.png";
import serviceDesign from "../assets/books/Service Design.png";
import predictablyIrrational from "../assets/books/Predictably Irrational.png";
import paradoxOfChoice from "../assets/books/Paradox of choice.png";
import oouxPodcast from "../assets/books/OOUX Podcast.png";
import nudge from "../assets/books/Nudge.png";
import methodesOfDesign from "../assets/books/Methodes of Design.png";
import leanUx from "../assets/books/Lean UX.png";
import jtbd from "../assets/books/JTBD.png";
import inspired from "../assets/books/Inspired.png";
import influence from "../assets/books/Influence.png";
import incognito from "../assets/books/Incognito.png";
import howToWinFriends from "../assets/books/How to win friends.png";
import growthDesign from "../assets/books/Growth.Design.png";
import flow from "../assets/books/Flow.png";
import designSprint from "../assets/books/Design Sprint.png";
import designOfEverydayThings from "../assets/books/Design of everyday things.png";
import creativityInc from "../assets/books/Creativity Inc..png";
import continuesDiscoveryHabits from "../assets/books/Continues Discovery Habits.png";
import choiceHacking from "../assets/books/Choice Hacking.png";
import actionableGamification from "../assets/books/Actionable Gamification.png";
import aTheoryOfFun from "../assets/books/A Theory of Fun.png";

const bookCoverImages: { [key: string]: string } = {
  "the-tipping-point": tippingPoint,
  flow: flow,
  "thinking-fast-and-slow": thinkingFastAndSlow,
  "predictably-irrational": predictablyIrrational,
  influence: influence,
  "design-sprint": designSprint,
  "how-to-win-friends": howToWinFriends,
  "actionable-gamification": actionableGamification,
  "theory-of-fun": aTheoryOfFun,
  "continuous-discovery-habits": continuesDiscoveryHabits,
  "creativity-inc": creativityInc,
  "design-of-everyday-things": designOfEverydayThings,
  inspired: inspired,
  "jobs-to-be-done": jtbd,
  "ux-for-lean-startups": leanUx,
  nudge: nudge,
  "ooux-podcast": oouxPodcast,
  "paradox-of-choice": paradoxOfChoice,
  "service-design-thinking": serviceDesign,
  incognito: incognito,
  "choice-hacking": choiceHacking,
  "growth-design-newsletter": growthDesign,
  "universal-methods": methodesOfDesign,
  "ux-magic": uxMagic,
};

export const books: Book[] = booksData.map((bookData) => {
  return new Book(
    bookData.id,
    bookData.title,
    bookData.description,
    bookData.author,
    bookData.publishedYear,
    bookData.category as BookCategory,
    bookData.status as ReadingStatus,
    bookData.isbn ?? undefined,
    bookData.keyTakeaways,
    bookData.quotes,
    bookData.tags,
    bookData.skillIds,
    bookData.caseStudyIds,
    bookData.toolIds,
    bookData.achievementIds,
    bookData.hasNotes,
    bookData.thoughts,
    bookCoverImages[bookData.id]
  );
});
