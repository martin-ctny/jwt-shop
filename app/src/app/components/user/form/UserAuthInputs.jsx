const UserAuthInputs = ({handleChange}) => {
    return ( 
        <>
            <div>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
        </>
     );
}
 
export default UserAuthInputs;