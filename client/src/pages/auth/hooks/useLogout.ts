const useLogout = () => {
	const logout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return { logout };
};

export default useLogout;
