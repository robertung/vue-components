const MyComponent = resolve => {
	require.ensure(['root/components/MyComponent.vue'], () => {
		resolve(require('root/components/MyComponent.vue'));
	}, 'MyComponent');
};

const FooBar = resolve => {
	require.ensure(['root/components/FooBar.vue'], () => {
		resolve(require('root/components/FooBar.vue'));
	}, 'FooBar');
};
export const routes = [
    	{
            path: '/',
            name: 'MyComponent',
            component: MyComponent
        },
        {
            path: '/foo',
            name: 'FooBar',
            component: FooBar
        }
]
