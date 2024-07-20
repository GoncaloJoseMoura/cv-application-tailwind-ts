import { PersonalDetailsProfile } from "./containers/PersonalDetails"
import { LanguagesProfile } from "./containers/Languages"
import { SkillsProfile } from "./containers/Skills"
import { EmploymentProfile } from "./containers/Employment"
import { EducationProfile } from "./containers/Education"

// confirm Personal details picture is working

function Profile() {
	return (
		<>
			<h1 className='mb-14 w-full rounded-xl bg-lightViolet py-5 text-center text-4xl text-white'>
				Resume builder
			</h1>
			<PersonalDetailsProfile />
			<EmploymentProfile />
			<SkillsProfile />
			<EducationProfile />
			<LanguagesProfile />
		</>
	)
}

export default Profile
