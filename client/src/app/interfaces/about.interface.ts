export interface About {
    data: {
        attributes: {
            pageTitle:string,
            profileName:string,
            profileText:string,
            sectionTitleCareer:string,
            sectionTitleSkills:string,
            profilePic: {
                data: {
                    attributes: {
                        url:string
                    }
                }
            },
            careerBg: {
                data: {
                    attributes: {
                        url:string
                    }
                }
            },
            skillBg: {
                data: {
                    attributes: {
                        url:string
                    }
                }
            }
        }
    }
}