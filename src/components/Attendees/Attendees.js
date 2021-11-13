import './Attendees.css';

function Attendees() {
    return (
        <div className="attendees-container">
            <table className="entries">
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Truman Chan</td>
                    <td>10:11 PM</td>
                    <td>11/3/2021</td>
                </tr>
                <tr>
                    <td>Marty N</td>
                    <td>Now</td>
                    <td>You</td>
                </tr>

            </table>
        </div>
    );
}

export default Attendees;
  