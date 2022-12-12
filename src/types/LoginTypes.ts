export default interface LoginTypes {
    login: () => void,
    setUsername: (username: string) => void,
    setPassword: (password: string) => void
}