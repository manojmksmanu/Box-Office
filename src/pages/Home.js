import React, {  useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";
import apiGet from "../misc/Fechconfig";
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from "./Home.styled";
import CustomRadio from "../components/CustomRadio";
// import Firstpageshow from "./Firstpageshow";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  // * if search serachOption is shows than isShowsSearch is true otherwiese it is false 🧠🧠
  const isShowsSearch = searchOption === "shows";
  console.log(isShowsSearch);
  const onInput = (e) => {
    setInput(e.target.value);
  };
  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };
//   useEffect(() => {
//     apiGet(`/${searchOption}`).then((result) => {
//       setResults(result);
//     });
//   }, [searchOption]);

  const onSearch = (e) => {
    if (input.length > 0) {
      apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
        setResults(result);
      });
      console.log(results);
    }

    if (input.length === 0) {
      console.log("nothing");
      alert("Empty can not be searched");

      return setResults(null);
    }
  };

  const onKeyDown = (e) => {
    console.log(e.keycode);
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div> No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
//     if (searchOption==='show'){
// return<ShowGrid data={results} />
//     }
//     if(searchOption!=='show'){
// return<ActorGrid data={results} />
//     }
    return  ;
  };

  // console.log(searchOption)
  // console.log(searchOption)
  return (
    <><div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-blue-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      {/* I can use children props here */}
      <MainPageLayout />
      <SearchInput
        placeholder="Search for something"
        onKeyDown={onKeyDown}
        onChange={onInput}
        value={input}
        type="text"
        name=""
        id=""
      />


      <RadioInputsWrapper>
<CustomRadio
label="Shows"
 checked={isShowsSearch}
 id="shows-search"
 value="shows"
 onChange={onRadioChange}
/>
<CustomRadio
label="Actors"
 checked={!isShowsSearch}
 id="actor-search"
 value="people"
 onChange={onRadioChange}
/>
 
    
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      </SearchButtonWrapper>
      {renderResults()}

      {/* </MainPageLayout> */}
    </>
  );
};

export default Home;
