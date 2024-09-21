export default function Profile({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdate = new Date(created_at);
  return (
    <div className="box">
      <div>
        <img src={avatar_url} />
      </div>
      <div>
        <a href={`https://github.com/${login}`}> {name || login} </a>
        <p>
          User Joined On{" "}
          {`${createdate.getDate()} ${createdate.toLocaleString("en-us", {
            month: "short",
          })} ${createdate.getFullYear()} `}
        </p>
      </div>
      <div>
        <p>Public repos</p>
        <p>{public_repos}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Following</p>
        <p>{following}</p>
      </div>
    </div>
  );
}
