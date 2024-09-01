import {
    IntroResume,
    ContactsResume,
    ProfileImage,
} from './containers/PersonalDetails';
import { LanguagesResume } from './containers/Languages';
import { EmploymentResume } from './containers/Employment';
import { EducationResume } from './containers/Education';
import { Download } from 'lucide-react';
import { ReferencesResume } from './containers/References';

function DownloadBar() {
    const print = () => {
        window.print();
    };

    return (
        <div className="absolute top-0 flex h-9 w-full items-center justify-center bg-zinc-700 px-5">
            <button
                className="cursor-pointer justify-self-center border-none bg-transparent transition-transform duration-300 ease-out hover:scale-125"
                type="button"
                aria-label="Save"
                onClick={print}
            >
                <Download className='text-white' />
            </button>
        </div>
    );
}

function Side() {
    return (
        <div className="side flex h-[842px] flex-col overflow-hidden bg-navyBlue">
            <ProfileImage />
            <div>
                <ContactsResume />
                <LanguagesResume />
            </div>
        </div>
    );
}

function Main() {
    return (
        <div className="main h-[842px] overflow-hidden px-[25px] py-12">
            <IntroResume />
            <EmploymentResume />
            <EducationResume />
            <ReferencesResume />
        </div>
    );
}

function Resume() {
    return (
        <>
            <DownloadBar />
            <div
                className="grid h-[842px] w-[592px] grid-cols-[35%_65%] bg-white"
                id="download-pdf"
            >
                <Side />
                <Main />
            </div>
        </>
    );
}

export default Resume;
