export enum ESex { Male, Female, Other}

export enum EUniversities { MIT, LNU, Cambridge, Harvard, Hogwarts, OurTestSchool}

export enum ESubjects { Math, Biology, English, Physics, Chemisty }

export interface ITeacher {
    name: string
    age:number
    sex: ESex
    subject: ESubjects
    yearsOfExperience: number
    workedInUniversities: EUniversities
}
