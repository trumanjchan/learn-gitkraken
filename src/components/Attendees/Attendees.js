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
                    <td>Your Name</td>
                    <td>The Time</td>
                    <td>The Date</td>
                </tr>

            </table>
        </div>
    );
}

export default Attendees;
  