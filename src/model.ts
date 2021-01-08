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
    studied_at_university: EUniversities
}

export interface IClassroom {
    id?: number
    url?: string
    windows?: number
    tables?: number
    boards?: number
    isOpenSpace?: boolean
}

export interface ILesson {
    id?: number
    subject: ESubjects
    day: EDays
    from: Date
    to: Date
    classroom_id: number
}
