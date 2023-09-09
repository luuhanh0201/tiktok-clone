import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUserGroup, faCompass, faSatelliteDish } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";
import Button from "@/components/Button";
import AccountsFollowed from "./AccountsFollowed";
function SideBar() {
    return (
        <div className="w-1/6">
            {/* menu */}

            <ul className="border-b pb-2">
                <NavLink to={"/"}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgba(254, 44, 85, 1)" : "",

                        };
                    }}
                >
                    <li className="pl-2 py-1 my-1 cursor-pointer hover:bg-gray-50 rounded-md duration-300"><FontAwesomeIcon className="w-5 h-5 mr-3" icon={faHouse} /><span className="text-lg">Dành cho bạn</span></li>
                </NavLink>
                <NavLink to={"/following"}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgba(254, 44, 85, 1)" : "",

                        };
                    }}
                >
                    <li className="pl-2 py-1 my-1 cursor-pointer hover:bg-gray-50 rounded-md duration-300"><FontAwesomeIcon className="w-5 h-5 mr-3" icon={faUserGroup} /><span className="text-lg">Đang follow</span></li>
                </NavLink>
                <NavLink to={"/explore"}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgba(254, 44, 85, 1)" : "",

                        };
                    }}
                >
                    <li className="pl-2 py-1 my-1 cursor-pointer hover:bg-gray-50 rounded-md duration-300"><FontAwesomeIcon className="w-5 h-5 mr-3" icon={faCompass} /><span className="text-lg">Khám phá</span></li>
                </NavLink>
                <NavLink to={"/live"}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgba(254, 44, 85, 1)" : "",

                        };
                    }}
                >
                    <li className="pl-2 py-1 my-1 cursor-pointer hover:bg-gray-50 rounded-md duration-300"><FontAwesomeIcon className="w-5 h-5 mr-3" icon={faSatelliteDish} /><span className="text-lg">Live</span></li>
                </NavLink>
            </ul>
            <div className="w-full border-b text-gray-400 font-light">
                <p className="my-4">Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                <Button className="w-full border-primaryColor text-primaryColor py-3 hover:bg-primaryColor/5 font-semibold text-lg" children="Đăng nhập" />
            </div>
            <div className="pt-4">
                <h4 className="pb-4 font-semibold text-gray-500">Các tài khoản đang follow</h4>
                <AccountsFollowed avatar="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fecb6427d8c15a13e0359d4203cd9eaa.jpeg?x-expires=1694466000&x-signature=PcDaHAvsIoY%2FCQUsFack%2B2xytEo%3D" username="Lưu Hạnh" tiktokId="lucii.211" />
                <AccountsFollowed avatar="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fecb6427d8c15a13e0359d4203cd9eaa.jpeg?x-expires=1694466000&x-signature=PcDaHAvsIoY%2FCQUsFack%2B2xytEo%3D" username="Lưu Hạnh" tiktokId="lucii.211" />
                <AccountsFollowed avatar="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fecb6427d8c15a13e0359d4203cd9eaa.jpeg?x-expires=1694466000&x-signature=PcDaHAvsIoY%2FCQUsFack%2B2xytEo%3D" username="Lưu Hạnh" tiktokId="lucii.211" verify />

            </div>
        </div>
    );
}

export default SideBar;