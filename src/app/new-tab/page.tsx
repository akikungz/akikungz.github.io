"use client";
import { useEffect, useRef, useState } from "react";

import { _class } from "@/functions";
import { bookmarks } from "@/assets/links";

interface SearchResults {
  query: string;
  index: number;
}

export default function NewTabPage() {
  const abortController = useRef(new AbortController());
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [resultIndex, setResultIndex] = useState<number>(-1);

  const fetchSearchResults = async (searchTerm: string) => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setSearchResults([]);
    setResultIndex(-1);

    if (!searchTerm) return;

    if (searchTerm.startsWith(":")) return;

    try {
      const response = await fetch(
        `https://search.saltyaom.com/hint/${searchTerm}`,
        {
          signal: abortController.current.signal,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "GET",
        },
      );
      const data = (await response.json()) as string[];

      setSearchResults(() =>
        data.map((item: any, index) => ({ query: item, index })),
      );
      // Process search results
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.log("Search request aborted");
        } else {
          console.error("Error fetching search results:", error);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const inputFocus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputFocus();
    fetchSearchResults("");

    window.addEventListener("focus", inputFocus);

    return () => {
      window.removeEventListener("focus", inputFocus);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[calc(100dvh-76px)]">
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-1/2 relative">
        <h1 className="text-4xl font-bold">New Tab</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="w-full h-12 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 rounded-sm"
          onChange={(event) => {
            const searchTerm = event.target.value;
            // Perform search or update state based on searchTerm
            fetchSearchResults(searchTerm);
          }}
          onKeyUp={(e) => {
            // redirect to search result page after pressing Enter key
            if (e.key === "Enter" && resultIndex == -1) {
              const val = e.currentTarget.value;
              if (val.startsWith(":")) {
                window.location.href = `http://localhost${val}`;
                return;
              }
              window.location.href = `https://google.com/search?q=${encodeURIComponent(e.currentTarget.value)}`;
            }

            if (e.key === "Enter" && searchResults[resultIndex]) {
              window.location.href = `https://google.com/search?q=${encodeURIComponent(searchResults[resultIndex].query)}`;
            }

            // Select search result after pressing arrow keys
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
              e.currentTarget.setSelectionRange(
                e.currentTarget.value.length,
                e.currentTarget.value.length,
              );

              if (e.key == "ArrowUp" && resultIndex <= 0) {
                setResultIndex(-1);
                return;
              }

              setResultIndex((prevIndex) => {
                const newIndex = prevIndex + (e.key === "ArrowDown" ? 1 : -1);
                return Math.max(
                  0,
                  Math.min(newIndex, searchResults.length - 1),
                );
              });
            }

            // Clear search results after pressing Escape key
            if (e.key === "Escape") {
              setSearchResults([]);
            }

            // Set value of input field to selected search result after pressing arrow right
            if (e.key === "ArrowRight" && searchResults[resultIndex]) {
              const query = searchResults[resultIndex].query;
              e.currentTarget.value = query;
              fetchSearchResults(query);
            }
          }}
        />

        {searchResults.length > 0 ? (
          <div className="absolute top-28 left-0 right-0 p-2 rounded-sm shadow-md z-10 bg-black/60">
            {searchResults
              .filter((_, index) => {
                if (resultIndex < 3) return index < 5;

                // select +-2 between resultIndex
                if (resultIndex >= 3 && resultIndex <= searchResults.length - 3)
                  return index >= resultIndex - 2 && index <= resultIndex + 2;

                // select +-2 from last result
                if (resultIndex >= searchResults.length - 3)
                  return (
                    index >= searchResults.length - 5 &&
                    index <= searchResults.length - 1
                  );
              })
              .map((result, index) => (
                <span
                  key={result.index}
                  className={_class(
                    "block p-2 hover:bg-gray-100/30 rounded",
                    result.index === resultIndex && "bg-gray-100/30",
                  )}
                >
                  {result.query}
                </span>
              ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-row flex-wrap gap-4 items-center">
        {bookmarks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={_class(item.className, "w-10 h-10 p-1 rounded-lg")}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
