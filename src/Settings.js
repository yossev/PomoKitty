import ReactSlider from 'react-slider';
import './slider.css'
import {useContext} from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

function Settings(){
    const settingsInfo = useContext(SettingsContext);
    return(


        <div style = {{textAlign:'left'}}>
            <label>
                Work Time: {settingsInfo.workMinutes}:00
            </label>
            <ReactSlider
                    className = {'slider'}
                    thumbClassName = {'thumb'}
                    trackClassName = {'track'}
                    Value = {settingsInfo.workMinutes}
                    onChange={newVal => settingsInfo.setWorkTime(newVal)}
                    min = {1}
                    max = {120}
                />
            <label>
                Break Time: {settingsInfo.breakMinutes}:00
            </label>
            <ReactSlider
                    className = {'slider'}
                    thumbClassName = {'thumb'}
                    trackClassName = {'track'}
                    Value = {settingsInfo.breakMinutes}
                    onChange={newVal => settingsInfo.setBreakTime(newVal)}
                    min = {1}
                    max = {120}
                />
            <div style={{textAlign: 'center', marginTop:'20px' }}>
                 <BackButton onClick={() => settingsInfo.setShowSettings(false)}/> 
            </div>
                
        </div>

    );


    
}

export default Settings;