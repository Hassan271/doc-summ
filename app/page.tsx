import Image from "next/image";
import React from "react";

import DocSummarize from "./docSumm/page";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";



export default function Home() {
  return (

<>

<Header/>
<DocSummarize/>
<Footer/>

</>

);
}
