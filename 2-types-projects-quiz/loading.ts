{
	/**
	 * Print Loading State
	 */
	type LoadingState = {
		state: 'loading';
	};

	type SuccessState = {
		state: 'success';
		response: {
			body: string;
		};
	};

	type FailState = {
		state: 'fail';
		reason: string;
	};

	type ResourceLoadState = LoadingState | SuccessState | FailState;

	function printLoginState(stateTest: ResourceLoadState) {
		if (stateTest.state === 'loading') {
			console.log('👀 loading...');
		} else if (stateTest.state === 'success') {
			console.log(`😃 ${stateTest.response.body}`);
		} else if (stateTest.state === 'fail') {
			console.log(`😱 ${stateTest.reason}`);
		}
	}

	printLoginState({ state: 'loading' }); // 👀 loading...
	printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
	printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
