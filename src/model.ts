export enum ESex { Male, Female, Other}

export enum EUniversities { MIT, LNU, Cambridge, Harvard, Hogwarts, OurTestSchool}

export enum ESubjects { Math, Biology, English, Physics, Chemistry }

export enum EDays { Monday, Tuesday, Wednesday, Thursday, Friday}

export interface ITeacher {
    id?: number
    name: string
    age: number
    sex: ESex
    subject: ESubjects
    years_of_experience: number
    worked_in_universities: EUniversities
}

export interface IClassroom {
    id?: number
}

export interface ILesson {
    id?: number
    url?: string
    subject: ESubjects
    days: EDays
    from: Date
    to: Date
    classroom_id: number
}
