let token = null;

const setToken = (newToken: string) => {
    token = `Bearer ${newToken}`
}

export default { setToken };