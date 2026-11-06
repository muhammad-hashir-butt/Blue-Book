import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage Component Sections
import Hero from './components/Hero';
import BookCategories from './components/BookCategories';
import RareCollectibles from './components/RareCollectibles';
import ShopConfidence from './components/ShopConfidence';
import InstitutionalSales from './curations/InstitutionalSales';

// Group 1 Sub-Pages (Literature & Classics)
import BiographyMemoir from './pages/BiographyMemoir';
import LiteraryClassicFiction from './pages/LiteraryClassicFiction';
import PoetryFineVerse from './pages/PoetryFineVerse';
import HistoricalFiction from './pages/HistoricalFiction';
import GraphicNovelsManga from './pages/GraphicNovelsManga';
import RomanceLiterature from './pages/RomanceLiterature';

// Group 2 Sub-Pages (Thought & Science)
import TheologyPhilosophy from './pages/thought/TheologyPhilosophy';
import AncientWorldHistory from './pages/thought/AncientWorldHistory';
import ScienceFictionFantasy from './pages/thought/ScienceFictionFantasy';
import CrimeThrillerMystery from './pages/thought/CrimeThrillerMystery';
import HumanitiesSocialSciences from './pages/thought/HumanitiesSocialSciences';
import ScholarlyEducational from './pages/thought/ScholarlyEducational';

// Group 3 Sub-Pages (Arts & Special Interests)
import FineArtsPhotography from './pages/arts/FineArtsPhotography';
import GastronomyCulinaryArts from './pages/arts/GastronomyCulinaryArts';
import NaturalHistoryWildlife from './pages/arts/NaturalHistoryWildlife';
import HobbiesCraftsGuilds from './pages/arts/HobbiesCraftsGuilds';
import SportsNaturalPursuits from './pages/arts/SportsNaturalPursuits';
import ChildrensIllustrated from './pages/arts/ChildrensIllustrated';

// Group 4 (pages2/rarities - Column 1: Classical Rarities)
import AntiquarianLeatherbounds from './pages2/rarities/AntiquarianLeatherbounds';
import ArtFinePrinting from './pages2/rarities/ArtFinePrinting';
import FineArtsFolios from './pages2/rarities/FineArtsFolios';
import AncientMedievalHistory from './pages2/rarities/AncientMedievalHistory';
import LawFinanceStatecraft from './pages2/rarities/LawFinanceStatecraft';
import VintageChildrensClassics from './pages2/rarities/VintageChildrensClassics';

// Group 5 (pages2/period - Column 2: Period Treasures)
import HistoricCookeryTreatises from './pages2/period/HistoricCookeryTreatises';
import PamphletsEphemera from './pages2/period/PamphletsEphemera';
import OdditiesCuriosaRarities from './pages2/period/OdditiesCuriosaRarities';
import NaturalHistoryAnimals from './pages2/period/NaturalHistoryAnimals';
import NineteenthCenturyLiterature from './pages2/period/NineteenthCenturyLiterature';
import WaxCylindersRecordings from './pages2/period/WaxCylindersRecordings';

// Group 6 (pages2/manuscripts - Column 3: Manuscripts & Science)
import TheologyBiblesMissals from './pages2/manuscripts/TheologyBiblesMissals';
import EarlyScienceAstronomy from './pages2/manuscripts/EarlyScienceAstronomy';
import OriginalHandSignedLetters from './pages2/manuscripts/OriginalHandSignedLetters';
import GenealogyNobleHeraldry from './pages2/manuscripts/GenealogyNobleHeraldry';
import HistoricGamesSports from './pages2/manuscripts/HistoricGamesSports';
import VintageMapsAtlases from './pages2/manuscripts/VintageMapsAtlases';

// Home Page Wrapper Component
function HomePage() {
  return (
    <>
      <Hero />
      <BookCategories />
      <RareCollectibles />
      <ShopConfidence />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fbf8f2] flex flex-col font-serif">
        
        {/* 1. Global Header Navigation */}
        <Navbar />

        {/* 2. Route Switching Area */}
        <main className="flex-1">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Group 1 Routes */}
            <Route path="/biography-memoir" element={<BiographyMemoir />} />
            <Route path="/literary-classic-fiction" element={<LiteraryClassicFiction />} />
            <Route path="/poetry-fine-verse" element={<PoetryFineVerse />} />
            <Route path="/historical-fiction" element={<HistoricalFiction />} />
            <Route path="/graphic-novels-manga" element={<GraphicNovelsManga />} />
            <Route path="/romance-literature" element={<RomanceLiterature />} />

            {/* Group 2 Routes */}
            <Route path="/theology-philosophy" element={<TheologyPhilosophy />} />
            <Route path="/ancient-world-history" element={<AncientWorldHistory />} />
            <Route path="/science-fiction-fantasy" element={<ScienceFictionFantasy />} />
            <Route path="/crime-thriller-mystery" element={<CrimeThrillerMystery />} />
            <Route path="/humanities-social-sciences" element={<HumanitiesSocialSciences />} />
            <Route path="/scholarly-educational" element={<ScholarlyEducational />} />

            {/* Group 3 Routes */}
            <Route path="/fine-arts-photography" element={<FineArtsPhotography />} />
            <Route path="/gastronomy-culinary-arts" element={<GastronomyCulinaryArts />} />
            <Route path="/natural-history-wildlife" element={<NaturalHistoryWildlife />} />
            <Route path="/hobbies-crafts-guilds" element={<HobbiesCraftsGuilds />} />
            <Route path="/sports-natural-pursuits" element={<SportsNaturalPursuits />} />
            <Route path="/childrens-illustrated" element={<ChildrensIllustrated />} />

            {/* Group 4 Routes (Classical Rarities) */}
            <Route path="/antiquarian-leatherbounds" element={<AntiquarianLeatherbounds />} />
            <Route path="/art-fine-printing" element={<ArtFinePrinting />} />
            <Route path="/fine-arts-folios" element={<FineArtsFolios />} />
            <Route path="/ancient-medieval-history" element={<AncientMedievalHistory />} />
            <Route path="/law-finance-statecraft" element={<LawFinanceStatecraft />} />
            <Route path="/vintage-childrens-classics" element={<VintageChildrensClassics />} />

            {/* Group 5 Routes (Period Treasures) */}
            <Route path="/historic-cookery-treatises" element={<HistoricCookeryTreatises />} />
            <Route path="/pamphlets-ephemera" element={<PamphletsEphemera />} />
            <Route path="/oddities-curiosa-rarities" element={<OdditiesCuriosaRarities />} />
            <Route path="/natural-history-animals" element={<NaturalHistoryAnimals />} />
            <Route path="/nineteenth-century-literature" element={<NineteenthCenturyLiterature />} />
            <Route path="/wax-cylinders-recordings" element={<WaxCylindersRecordings />} />

            {/* Group 6 Routes (Manuscripts & Science) */}
            <Route path="/theology-bibles-missals" element={<TheologyBiblesMissals />} />
            <Route path="/early-science-astronomy" element={<EarlyScienceAstronomy />} />
            <Route path="/original-hand-signed-letters" element={<OriginalHandSignedLetters />} />
            <Route path="/genealogy-noble-heraldry" element={<GenealogyNobleHeraldry />} />
            <Route path="/historic-games-sports" element={<HistoricGamesSports />} />
            <Route path="/vintage-maps-atlases" element={<VintageMapsAtlases />} />
            


            <Route path="/institutional-sales" element={<InstitutionalSales />} />

          </Routes>
        </main>

        {/* 3. Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}