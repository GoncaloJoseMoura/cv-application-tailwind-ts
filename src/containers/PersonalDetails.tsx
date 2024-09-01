import Title from '../components/Title';
import { FormPersonalDetails } from '../components/Forms';
import { useStore } from '../Store/combinedStore';

function PersonalDetailsProfile() {
    return (
        <>
            <Title text="Personal details" />
            <FormPersonalDetails />
        </>
    );
}

function IntroResume() {
    const personalDetails = useStore.use.personalDetails();
    // const personalDetails = usePersonalDetailsStore(
    // 	(state) => state.personalDetails
    // )

    return (
        <>
            <h1 className="mb-[2px] text-[2rem] font-semibold tracking-[0.15rem] text-navyBlue">
                {personalDetails.firstName}
                <span className="text-[2rem] font-light tracking-[0.2rem]">
                    {' '}
                    {personalDetails.lastName}
                </span>
            </h1>
            <h2 className="mb-[5px] text-[0.95rem] font-normal tracking-[0.2rem] text-navyBlue">
                {personalDetails.occupation}
            </h2>
            <p className="card min-h-[70px] max-w-[336px] break-words text-justify text-[0.6rem] text-darkGray">
                {personalDetails.about}
            </p>
        </>
    );
}

function ContactsResume() {
    const personalDetails = useStore.use.personalDetails();
    // const personalDetails = usePersonalDetailsStore(
    // 	(state) => state.personalDetails
    // )
    //
    if (
        personalDetails.address === "" &&
        personalDetails.phone === "" &&
        personalDetails.email === "" &&
        personalDetails.linkedin === "" &&
        personalDetails.portfolio === ""
    ) return

    return (
        <>
            <h2 className="mb-[15px] ml-[20%] w-full border-b-[1px] border-solid border-white pb-[5px] text-[1.1rem] text-white">
                Contact
            </h2>
            <ul className="mb-5 ml-[20%] list-none pl-0">

                {personalDetails.address !== "" && (
                    <li className="mb-[10px] text-[0.65rem] font-bold text-white">
                        Address
                        <br />
                        <span className="text-[0.5rem] font-normal text-white">
                            {personalDetails.address}
                        </span>
                    </li>
                )}

                {personalDetails.phone !== "" && (
                    <li className="mb-[10px] text-[0.65rem] font-bold text-white">
                        Phone
                        <br />
                        {' '}
                        <span className="text-[0.5rem] font-normal text-white">
                            {personalDetails.phone}
                        </span>
                    </li>
                )}

                {personalDetails.email !== "" && (
                    <li className="mb-[10px] text-[0.65rem] font-bold text-white">
                        Email
                        <br />
                        {' '}
                        <a
                            href="mailto: goncalo771@gmail.com"
                            className="text-[0.5rem] font-normal text-white underline"
                        >
                            {personalDetails.email}
                        </a>
                    </li>
                )}

                {personalDetails.linkedin !== "" && (
                    <li className="mb-[10px] text-[0.65rem] font-bold text-white">
                        Linkedin
                        <br />
                        {' '}
                        <a
                            href="https://linkedin.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.5rem] font-normal text-white underline"
                        >
                            {personalDetails.linkedin}
                        </a>
                    </li>
                )}

                {personalDetails.portfolio !== "" && (
                    <li className="mb-[10px] text-[0.65rem] font-bold text-white">
                        Portfolio
                        <br />
                        {' '}
                        <a
                            href="https://github.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.5rem] font-normal text-white underline"
                        >
                            {personalDetails.portfolio}
                        </a>
                    </li>
                )}
            </ul>
        </>
    );
}

function ProfileImage() {
    const personalDetails = useStore.use.personalDetails();

    return (
        <img
            className="mx-auto my-9 h-36 w-36 rounded-full object-cover"
            src={personalDetails.file}
            alt=""
        />
    );
}

export {
    PersonalDetailsProfile, IntroResume, ContactsResume, ProfileImage,
};
