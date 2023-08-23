// redis?

const rotas = {
    "teste": "niMPRp38JHZv3Cr9V9fmvEngjTX2",
    "teste2": "OZ8KuDirYEg94llqAhwmzMiEVkq1"
}

export const getId = (username: string) => rotas[username as keyof typeof rotas]
