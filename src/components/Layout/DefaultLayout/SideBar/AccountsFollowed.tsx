import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TypeInfoAccount {
    avatar: string;
    username: string;
    tiktokId: string;
    verify?: boolean;
}
function AccountsFollowed({ avatar, username, tiktokId, verify }: TypeInfoAccount) {

    return (
        <div className="flex items-center overflow-hidden mb-2  hover:bg-gray-50 py-1 duration-300 cursor-pointer">
            <img className="rounded-full w-8 h-8 mr-2" src={avatar} alt="" />
            <div className="">
                <p className="font-semibold text-sm relative pr-4">{username}
                    {verify === true ? <FontAwesomeIcon className="absolute right-0 top-0 text-xs text-blue-500" icon={faCircleCheck} /> : ""}
                </p>
                <p className="font-light text-sm">{tiktokId}</p>
            </div>

        </div>
    );
}

export default AccountsFollowed;