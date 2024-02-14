import Icons from "../assets/icons";

const Search = () => {
    return <div className="search">
        <input type="text" className="input" placeholder="search"/>
        <Icons.search/>
    </div>
};

export default Search;