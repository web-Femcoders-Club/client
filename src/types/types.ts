export type ChildrenProps = {
    children: React.ReactNode;
};

export type User = {
    idUser: number;
    userName: string;
    userLastName: string;
    userEmail: string;
    userPassword: string;
    userTelephone: string;
    userGender: string;
    userRole: string;
    accesToken?: string;
};

export type EditUserFormData = {
    userId: string;
    updatedUser: {
        userName: string;
        userLastName: string;
        userGender: string;
        userEmail: string;
        userTelephone: string;
    };
};

export type SignUpFormData = {
    name: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword?: string;
};

export type Sponsor = {
    idPotential_Sponsors: string;
    sponsorsName: string;
    sponsorsCompany: string;
    sponsorsEmail: string;
    sponsorsTelephone: string;
};

export type AddSponsorFormData = {
    sponsorsName: string;
    sponsorsCompany: string;
    sponsorsEmail: string;
    sponsorsTelephone: string;
};

export type EditSponsorFormData = {
    idPotential_Sponsors: string;
    updatedSponsor: {
        sponsorsName: string;
        sponsorsCompany: string;
        sponsorsEmail: string;
        sponsorsTelephone: string;
    };
};

export type DeleteSponsorType = {
    sponsorId: string;
};

export type Volunteer = {
    idVolunteer: string;
    volunteerName: string;
    volunteerLastName: string;
    volunteerEmail: string;
    volunteerGender: string;
};

export type AddVolunteerData = {
    volunteerName: string;
    volunteerLastName: string;
    volunteerEmail: string;
    volunteerGender: string;
};

export type EditVolunteerData = {
    idVolunteer: string;
    updatedVolunteer: {
        volunteerName: string;
        volunteerLastName: string;
        volunteerEmail: string;
        volunteerGender: string;
    };
};

export type DeleteVolunteerData = {
    idVolunteer: string;
};

export type Faq = {
    idFaq: number;
    faqQuestion: string;
    faqAnswer: string;
};

export type AddFaqFormData = {
    faqQuestion: string;
    faqAnswer: string;
};

export type EditFaqFormData = {
    faqQuestion: string;
    faqAnswer: string;
};

export type Member = {
    idMember: number;
    memberName: string;
    memberLastName: string;
    memberDescription: string;
    memberRole: string;
    memberImage: string;
    memberLinkedin: string;
};

export type AddMemberFormData = {
    memberName: string;
    memberLastName: string;
    memberDescription: string;
    memberRole: string;
    memberImage: string;
    memberLinkedin: string;
};

export type EditMemberFormData = {
    idMember: number;
    updatedMember: {
        memberName: string;
        memberLastName: string;
        memberDescription: string;
        memberRole: string;
        memberImage: string;
        memberLinkedin: string;
    };
};

export type DeleteMemberData = {
    idMember: number;
};

export type TokenVerificationDto = {
    token: string;
};

export type ContactFormProps = {
    recipientEmail: string;
};

export type ConfirmationModalProps = {
    isVisible: boolean;
    onClose: () => void;
};

export type UpdateMemberDto = {
    memberName?: string;
    memberLastName?: string;
    memberDescription?: string;
    memberRole?: string;
    memberImage?: string;
    memberLinkedin?: string;
};


