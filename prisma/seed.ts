import prisma from "../src/config/prisma"


async function main() {
  const johnjones = await prisma.user.upsert({
    where: { email: "johnjones@gmail.com" },
    update: {},
    create: {
      email: "John Jones",
      name: "johnjones@gmail.com",
      password:"$2b$10$g.71ihNTwjCFGARQc2.tReobBGlYoYXZZ.xcWNbuFPED5bDmDp6T2",
    },
  })

  const johndoe = await prisma.user.upsert({
    where: { email: "johndoe@gmail.com" },
    update: {},
    create: {
      email: "johndoe@gmail.com",
      name: "John Doe",
      password: "$2b$10$KX/VCygckko9esIvoNvYYOleVLMyX7IPvGuR1YZZmxjlMZTgmX6me"
    },
  })

  const peterparker = await prisma.user.upsert({
    where: { email: "peterparker@gmail.com" },
    update: {},
    create: {
      email: "peterparker@gmail.com",
      name: "Peter Parker",
      password: "$2b$10$009r17/H1lTvXvd3G8mDTumJwuog9L8TDZjgc5OnQ/XRO4LxccbUK"
    },
  })
  console.log({ johnjones, johndoe, peterparker })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  });