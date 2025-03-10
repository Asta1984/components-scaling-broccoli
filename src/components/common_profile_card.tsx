import { ProfileCard } from "./profile_card";

export default function CommonInfoCard() {
    return(
        <div className="min-h-screen flex p-4 ">
            <ProfileCard
                firstName="Sienna"
                lastName="Hewitt"
                email="siennahewitt@gmail.com"
                location ="United States"
                dateofbirth='23-09-2001'
            />
        </div>
    )
}