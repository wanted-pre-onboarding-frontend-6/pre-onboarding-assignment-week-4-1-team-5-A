import { useParams } from 'react-router-dom';

function UserDetail() {
  const params = useParams();
  const id = params.id;

  const userGenderHandler = (genderNum: number) => {
    if (genderNum === 1 || genderNum === 3) {
      return 'male';
    } else {
      return 'female';
    }
  };

  // user 가져와야 합니다.

  return (
    <div></div>
    // <div>
    //   <img src={user.photo} alt={user.name} />
    //   <div>{user.name}</div>
    //   <div>{user.email}</div>
    //   <div>{user.age}</div>
    //   <div>{userGenderHandler(user.gender_origin)}</div>
    //   <div>{user.phone_number}</div>
    //   <div>{user.birth_date}</div>
    //   <div>{user.address}</div>
    //   <div>{user.detail_address}</div>
    // </div>
  );
}
export default UserDetail;
