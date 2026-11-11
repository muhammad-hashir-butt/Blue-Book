
import React from "react";
import { Link } from "react-router-dom";
import {
  Utensils,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function GastronomyCulinaryArts() {

  // ==========================================
  // GASTRONOMY & CULINARY ARTS
  // Images: public/Gastronomy/
  // Actual titles matched with book covers
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Advanced Culinary Workbook for Teens",
      author: "Arlene DeJoy-Meckes",
      format: "Culinary Education & Teen Cooking",
      image: "/Gastronomy/Gastronomy1.webp",
      amazonUrl:
        "https://www.amazon.com/Advanced-Culinary-Curriculum-Workbook-Homeschool/dp/B0FV93Z3NB/ref=sr_1_1?dib=eyJ2IjoiMSJ9.QXqWstMRzYcq7CPwr_aYXYUsVqhhoKTTAdso1_gjjTZpVImcufkidwoJrrfqXE7svW7Gzt-lCxPr9QMv7BwUeVjoF5ITLre7lcpEjmbIawEDtp-YMDO9fbASWJTp15tHO7L2-x8U9k3_v6CrwPutfWo4S-llTKCODHeaHHhS2jfgzrldzOZDnD2F82SaDZZ2NW2BurjAtpEMPGLWvLyVY_SyeFsEytsuzxh4v3CaNhQ.7M8P0-sXQERnq--GYIbXXKf3eAadBMRRuVcieytvXo8&dib_tag=se&keywords=Advanced+Culinary+Workbook+for+Teens+Arlene+DeJoy-Meckes&qid=1794415850&sr=8-1",
    },
    {
      id: 2,
      title: "Nihilistic Gastronomy: The Art of White People Cooking",
      author: "Joseph H. Hanes",
      format: "Food Culture & Culinary Commentary",
      image: "/Gastronomy/Gastronomy2.jpg",
      amazonUrl:
        "https://www.amazon.com/Nihilistic-Gastronomy-White-Washed-Culinary-Notebook/dp/B0CNGNZHRD/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Z-gUku57r9iXKwc4ybWMpw.dh2KkL4afvtGmTh5EB7ERCO-O14ib57-S5JMP26Pyjc&dib_tag=se&keywords=Nihilistic+Gastronomy+Joseph+H+Hanes&qid=1794415920&sr=8-1",
    },
    {
      id: 3,
      title: "CTE-2100: Basic Cooking Methods",
      author: "3andB",
      format: "Professional Cooking & Culinary Skills",
      image: "/Gastronomy/Gastronomy3.jpg",
      amazonUrl:
        "https://www.amazon.com/CTE-2100-Cooking-Workbook-Culinary-Hospitality/dp/B0GJJGSD1X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.HrbgeAOP4VAFRHEc5i9Ngq-I3mpjnrFBW0HZktkDuVRKFxgT8omxC90usZj1u-3iSXzZqonX_e-dJVTVCoAEgxBAAkeXKB4_P4rza0uIcW_Y198TEEQcSer2otb92KW7D_GVA39jmWC6iV0Pv8HEGQ.ZRW5_SivHAXbHRUSsqd5jqnoMe8EvKy93dbQ6hMffWA&dib_tag=se&keywords=CTE-2100+Basic+Cooking+Methods+Full+Workbook+Answer+Keys&nsdOptOutParam=true&qid=1794415950&sr=8-1",
    },
    {
      id: 4,
      title: "CTE-2100: Culinary Foundations I",
      author: "3andB",
      format: "Culinary Foundations & Education",
      image: "/Gastronomy/Gastronomy4.jpg",
      amazonUrl:
        "https://www.amazon.com/CTE-2100-Culinary-Foundations-Workbook-Hospitality/dp/B0F7FTNHKB/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Ot3c07gNRASmVx5_hWYOV240Kd9hWOC2eIfMzFju0GbcfaVBX1yxjBzfKDHpwbA-aUiDSPJcs3adWWvoTFXfx1qufPrxLGoEdLO8a0oYat7HDhiWElEfL0pWfpb8-JxUm6Jx4UnKyJBKVRXQKs6B5w.FvS24NqFRI838koMqj-J8E953BXWL1lDC9H1TBNKtbw&dib_tag=se&keywords=CTE-2100+Culinary+Foundations+I+Full+Workbook+Answer+Keys&nsdOptOutParam=true&qid=1794416013&sr=8-1",
    },
    {
      id: 5,
      title: "CTE-2100: Baking Foundations",
      author: "3andB",
      format: "Baking & Pastry Education",
      image: "/Gastronomy/Gastronomy5.jpg",
      amazonUrl:
        "https://www.amazon.com/CTE-2100-Foundations-Workbook-Culinary-Hospitality/dp/B0G4W3BDDD/ref=sr_1_1?dib=eyJ2IjoiMSJ9.1XW5D2d2t53XzIrIg4i3RZBwfLEEgj7QFlFoJLp475ptlpjC-TOt8vhwoepk6y_BWQLLAwrxIAbqc6J-eb4DP4wXnsK3u2PcV-lyz0OoIig.6y84T-AzuBTV12J6akjkuhbdUL02iqeQgqy-WhLlzjA&dib_tag=se&keywords=CTE-2100+Baking+Foundations+Full+Workbook+Answer+Keys&qid=1794416034&sr=8-1",
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#fbf8f2] text-[#241a15] px-4 sm:px-6 py-7"
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB NAVIGATION */}

        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">
          <Link
            to="/"
            className="flex items-center gap-1 text-[#7a6452] no-underline"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span>/</span>

          <span>Arts & Special Interests</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Gastronomy & Culinary Arts
          </span>
        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Utensils size={16} />

                <span>
                  Culinary Education, Food Culture & Cooking Techniques
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Gastronomy & Culinary Arts
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore the fascinating world of culinary arts,
                professional cooking methods, food culture,
                baking fundamentals, and culinary education.
                Discover practical workbooks, essential kitchen
                techniques, and creative approaches to food
                preparation and gastronomy.
              </p>

            </div>

            {/* CURATED INDEX */}

            <div className="sm:border-l border-[#594638] sm:pl-6 shrink-0">

              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#c29b38]">
                Curated Index
              </span>

              <span className="block text-xl font-bold text-white mt-1">
                {books.length} Volumes
              </span>

            </div>

          </div>

        </header>

        {/* BOOK COLLECTION GRID */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >

              {/* BOOK COVER */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* CATEGORY BADGE */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* BOOK DETAILS */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR / PUBLISHER */}

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  {book.id >= 3 ? "Published by " : "by "}
                  {book.author}
                </p>

                {/* AMAZON VIEW BOOK BUTTON */}

                <div className="mt-auto pt-4">

                  <div className="border-t border-[#e2d7c5] pt-3">

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Find ${book.title} on Amazon`}
                      className="w-full bg-[#241a15] text-[#fffaf4] text-[12px] font-bold py-3 px-3 uppercase tracking-wide flex items-center justify-center gap-2 no-underline"
                    >

                      <BookOpen size={15} />

                      View Book

                      <ArrowUpRight size={15} />

                    </a>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </section>

        {/* BOTTOM DIVIDER */}

        <div className="flex items-center gap-3 mt-9">

          <span className="h-px flex-1 bg-[#d6c7b2]" />

          <span className="text-[#8c7355] text-xs">
            ♦ ♦ ♦
          </span>

          <span className="h-px flex-1 bg-[#d6c7b2]" />

        </div>

      </div>
    </div>
  );
}
