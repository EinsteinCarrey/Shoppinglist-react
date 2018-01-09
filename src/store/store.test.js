import configureStore from "./configureStore";


describe('Test usersActions store manipulation ', () => {

    const user = {
        username: "my_name",
        firstname: "john",
        lastname: "doe",
        password: "johndoe123",
        security_question: "random question",
        answer: "my answer",
        id: 1
    };
    const token = "qws3456tghyGFrtyH7uhji87yujh";

    // it('Create User fail reduces number of ajax calls', () => {
    //     const store = configureStore();
    //     const action = userActions.createUserFail();
    //     store.dispatch(action);
    //
    //     const actual = store.getState().ajaxCallsInProgress;
    //     const expected = -1;
    //     expect(actual).toEqual(expected);
    // });
    
});



describe('Test lists store manipulation ', () => {


    const store = configureStore();

    const lists = [
        {
            id: 1,
            title: "back to school",
            created_on: "2017-10-12 10:40:32",
            modified_on: "",
            user_id: 4567
        }
    ];

});

