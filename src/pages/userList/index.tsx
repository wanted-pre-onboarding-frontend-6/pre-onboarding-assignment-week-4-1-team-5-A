// import ListTable from 'container/ListTable/Table';
import useListUser from 'queries/user/useListUser';

const UserListPage = () => {
  const { data, isLoading, isError } = useListUser({
    page: 1,
    limit: 10,
  });

  console.log(data, isLoading, isError);

  return (
    <div>
      <h1>userList Page</h1>
      {/* <ListTable type="user" /> */}
    </div>
  );
};
export default UserListPage;
