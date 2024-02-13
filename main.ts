player.onChat("pool", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 7; index++) {
            for (let index = 0; index < 3; index++) {
                agent.destroy(DOWN)
                agent.move(DOWN, 1)
            }
            agent.move(UP, 3)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
        agent.move(RIGHT, 1)
    }
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 3; index++) {
                agent.destroy(DOWN)
                agent.move(DOWN, 1)
            }
            agent.move(UP, 3)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
        agent.move(RIGHT, 1)
    }
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 3; index++) {
            for (let index = 0; index < 3; index++) {
                agent.destroy(DOWN)
                agent.move(DOWN, 1)
            }
            agent.move(UP, 3)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
        agent.move(RIGHT, 1)
    }
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
    }
    agent.move(UP, 3)
    agent.setSlot(6)
    agent.move(BACK, 2)
    agent.move(DOWN, 3)
    agent.move(LEFT, 2)
    for (let index = 0; index < 5; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(RIGHT, 1)
    agent.move(BACK, 1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(RIGHT, 1)
    agent.move(BACK, 1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.setSlot(6)
    agent.move(BACK, 6)
    agent.move(LEFT, 5)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 6)
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(LEFT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(FORWARD, 1)
    agent.move(RIGHT, 1)
    agent.setSlot(7)
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(RIGHT, 2)
    agent.move(BACK, 1)
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.move(RIGHT, 2)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
player.onChat("agent_turn", function () {
    agent.turn(RIGHT_TURN)
})
player.onChat("agent_tp", function () {
    agent.teleportToPlayer()
})
player.onChat("random_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(randint(8, 12))
        agent.move(FORWARD, randint(0, 20))
        agent.place(FORWARD)
        agent.place(BACK)
        agent.setSlot(randint(8, 12))
        agent.move(BACK, randint(0, 20))
        agent.place(FORWARD)
        agent.place(BACK)
        agent.move(RIGHT, 1)
    }
})
player.onChat("house", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 4)
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.setSlot(2)
    agent.move(UP, 1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(RIGHT, 1)
        for (let index = 0; index < 2; index++) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(LEFT, 1)
        for (let index = 0; index < 2; index++) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(DOWN, 4)
    agent.move(RIGHT, 1)
    agent.turn(LEFT_TURN)
    agent.move(LEFT, 3)
    for (let index = 0; index < 2; index++) {
        agent.destroy(FORWARD)
        agent.move(UP, 1)
    }
    agent.move(DOWN, 3)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.move(BACK, 3)
})
player.onChat("fence", function () {
    agent.setSlot(4)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 22)
        agent.turn(RIGHT_TURN)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(UP, 1)
    agent.move(RIGHT, 1)
    agent.move(BACK, 1)
    agent.move(DOWN, 1)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.move(UP, 1)
    agent.move(FORWARD, 15)
    agent.setSlot(5)
    agent.destroy(DOWN)
    agent.turn(RIGHT_TURN)
    agent.place(DOWN)
})
player.onChat("clone_house", function () {
    blocks.clone(
    world(-6, 8, -17),
    world(-12, 4, -11),
    pos(0, 0, 0),
    CloneMask.Replace,
    CloneMode.Normal
    )
})
player.onChat("road", function () {
    blocks.fill(
    GRAY_CONCRETE,
    world(-29, 3, -18),
    world(-33, 3, 10),
    FillOperation.Replace
    )
    blocks.fill(
    GRAY_CONCRETE,
    world(-5, 3, 6),
    world(-33, 3, 10),
    FillOperation.Replace
    )
    agent.setSlot(1)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 2)
        for (let index = 0; index < 6; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(FORWARD, 3)
        }
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
    }
})
