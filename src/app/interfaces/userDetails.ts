export interface UserDetails {
    id: number,
    nameTitle: string,
    firstName: string,
    lastName: string,
    gender: string,
    phone: string,
    cell: string,
    dob: string,
    image: string,
    email: string,
    createdAt: string,
    location: {
        street: string,
        city: string,
        state: string,
        postcode: string,
        timezone: string
    }
}
