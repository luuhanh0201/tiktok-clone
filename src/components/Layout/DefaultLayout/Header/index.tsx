import images from "@/assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCircleXmark, faEllipsisVertical, faKeyboard, faLanguage, faLightbulb, faMagnifyingGlass, faMoon, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import Button from "@/components/Button";
import Tippy from "@tippyjs/react/headless";
import Wrapper from "@/components/Wrapper";
import { Switch } from "antd";
type Search = string
function Header() {
    const [activeClear, setActiveClear] = useState<boolean>(false);
    const [searchResult, setSearchResult] = useState<Search>("")
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value !== "" ? setActiveClear(true) : setActiveClear(false);
        setSearchResult(e.target.value)
    }
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className="w-full flex justify-center items-center shadow-sm border-b-2">

            <header style={{ width: "1240px" }} className="h-16 flex items-center justify-between" >
                {/* Logo */}
                <div className="flex items-center h-full">
                    <Link to="/"><img className="w-28 h-9" src={images.logo} alt="" /></Link>
                </div>

                {/* Search */}
                <Tippy
                    interactive={true}
                    className=" w-1/3"
                    visible={searchResult !== ""}
                    render={attrs => (
                        <div style={{ maxWidth: "420px", minWidth: "300px", width: "420px" }} tabIndex={-1} >
                            <Wrapper className=" w-full" {...attrs}>
                                Tim kiem
                            </Wrapper>
                        </div>
                    )}
                >
                    <div style={{ maxWidth: "420px", minWidth: "300px", width: "420px" }} className="h-full relative flex items-center group ">
                        <input
                            onChange={onChangeSearch}
                            value={searchResult}
                            name="search"
                            autoComplete="off"
                            className="h-4/6 w-full rounded-3xl outline-none px-4 bg-slate-50 hover:border duration-200"
                            type="text"
                            spellCheck={false}
                            placeholder="Search accounts and videos" />

                        <div className="absolute right-0  rounded-r-3xl h-4/6 flex items-center pr-3 group-hover:bg-gray-200 duration-200">
                            <FontAwesomeIcon className="text-xl border-l py-1 text-gray-500 rounded-r-3xl pl-2" icon={faMagnifyingGlass} />
                            <FontAwesomeIcon onClick={() => setSearchResult("")} className={`absolute -left-6 text-gray-500 duration-300 ${activeClear === false ? "hidden" : ""}`} icon={faCircleXmark} />

                        </div>
                        {/* loading */}
                    </div>
                </Tippy>

                <div className="flex items-center justify-center font-semibold">
                    <Button className="px-3 py-2 mr-2 hover:bg-gray-50 duration-300">
                        <FontAwesomeIcon className="pr-2" icon={faPlus} />
                        Tải lên
                    </Button>
                    <Button className="px-3 py-2 bg-primaryColor border-primaryColor text-white hover:bg-red-600/70 duration-300 mr-3" children="Đăng nhập" />

                    <Tippy
                        interactive={true}
                        className=" w-1/3"
                        duration={[275, 250]}
                        placement="top"
                        trigger="mouseenter"
                        render={attrs => (
                            <div style={{ maxWidth: "300px" }} tabIndex={-1} >
                                <Wrapper className="w-full" {...attrs}>
                                    <ul className="py-4 ">
                                        <li className=" px-3 flex items-center text-lg py-1 hover:bg-gray-50 cursor-pointer duration-300"><FontAwesomeIcon className="mr-2 w-5 h-5" icon={faLightbulb} /><span >Trung tâm nhà sáng tạo</span></li>
                                        <li className=" px-3 flex items-center text-lg py-1 hover:bg-gray-50 cursor-pointer duration-300"><FontAwesomeIcon className="mr-2 w-5 h-5" icon={faLanguage} /><span >Tiếng việt</span></li>
                                        <li className=" px-3 flex items-center text-lg py-1 hover:bg-gray-50 cursor-pointer duration-300"><FontAwesomeIcon className="mr-2 w-5 h-5" icon={faCircleQuestion} /><span >Phản hồi và trợ giúp</span></li>
                                        <li className=" px-3 flex items-center text-lg py-1 hover:bg-gray-50 cursor-pointer duration-300"><FontAwesomeIcon className="mr-2 w-5 h-5" icon={faKeyboard} /><span >Phím tắt</span></li>
                                        <li className=" px-3 flex items-center text-lg py-1 hover:bg-gray-50 cursor-pointer duration-300 relative"><FontAwesomeIcon className="mr-2 w-5 h-5" icon={faMoon} /><span >Chế độ tối</span> <Switch className="absolute right-2" defaultChecked onChange={onChange} /></li>
                                    </ul>
                                </Wrapper>
                            </div>
                        )}
                    >
                        <FontAwesomeIcon className="text-2xl p-2 cursor-pointer" icon={faEllipsisVertical} />
                    </Tippy>


                </div>
            </header >

        </div >
    );
}

export default Header;