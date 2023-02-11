export class Profile {
    img: string = "https://nocache.alexslemonade.org/sites/all/modules/custom/alsf_user/images/user-profile-default-yellow.png";
    name: string;
    contact: string;
    bio: string;

    constructor(name: string, contact: string, bio: string) {
        this.name = name;
        this.contact = contact;
        this.bio = bio;
    }

}