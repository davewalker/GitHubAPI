import GitHub from '../github'

// Expected data, username and ID should never change(!)
const testUser = {
    login: 'octocat',
    id: 583231
}

const invalidTestUser = {
    login: -1
}

test('/<user>', async () => {    
    const userObj = await GitHub.getUser(testUser.login)
    expect(userObj).toStrictEqual(expect.objectContaining({
        id: testUser.id
    }))
})

test('/<invalid_user>', async() => {
    const expected = {
        message: 'Not Found'
    }
    const userObj = await GitHub.getUser(invalidTestUser.login)
    expect(userObj).toStrictEqual(expect.objectContaining(expected))
})

test('/<user>/events', async () => {
    const eventsObj = await GitHub.getRecentActivity(testUser.login)
    expect(eventsObj).toStrictEqual(expect.any(Array))
})

test('/<user>/repos', async () => {
    const eventsObj = await GitHub.getRepos(testUser.login)
    expect(eventsObj).toStrictEqual(expect.any(Array))
})