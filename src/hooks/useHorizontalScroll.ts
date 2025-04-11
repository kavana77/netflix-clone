import { useRef } from "react";

export default function useHorizontalScroll(){
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (offset: number) => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + offset,
            behavior: "smooth",
          });
        }
}
return {scrollRef,scroll}
}