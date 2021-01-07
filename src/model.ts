export enum ESex { Male, Female, Other}

export enum EUniversities { MIT, LNU, Cambridge, Harvard, Hogwarts, OurTestSchool}

export enum ESubjects { Math, Biology, English, Physics, Chemistry }

export interface ITeacher {
    id?:number
    name: string
    age:number
    sex: ESex
    subject: ESubjects
    yearsOfExperience: number
    workedInUniversities: EUniversities
}
