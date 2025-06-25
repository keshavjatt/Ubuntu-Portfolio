import { FormEvent } from 'react';

import { Accordion } from '@/components/accordion';
import {
  AudioVolume,
  Battery,
  Bluetooth,
  Brightness,
  Lock,
  PowerOff,
  Settings,
  Wifi,
} from '@/components/icons';
import { Slider } from '@/components/slider';
import {
  setBrightnessLevel,
  setSoundLevel,
} from '@/redux/features/status-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useBatteryStatus } from '@/hooks/useBatteryStatus'; // 👈 Import custom battery hook

interface StatusCardProps {}

const StatusCard = ({}: StatusCardProps) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.status);
  const battery = useBatteryStatus(); // 👈 Hook use karo

  const batteryLevelPercent = Math.round(battery.level * 100);
  const isLow = batteryLevelPercent < 20;
  const isCharging = battery.charging;

  return (
    <div className="absolute right-0 top-8 w-72 rounded-md border border-black border-opacity-20 bg-gray-900 p-1.5 shadow">
      <div className="flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800">
        <AudioVolume />
        <Slider
          onChange={(e: FormEvent<HTMLInputElement>) =>
            dispatch(
              setSoundLevel(Number((e.target as HTMLInputElement).value)),
            )
          }
          value={status.soundLevel}
        />
      </div>
      <div className="flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800">
        <Brightness />
        <Slider
          onChange={(e: FormEvent<HTMLInputElement>) =>
            dispatch(
              setBrightnessLevel(Number((e.target as HTMLInputElement).value)),
            )
          }
          value={status.brightnessLevel}
        />
      </div>
      <hr className="my-2 h-px border-0 bg-gray-700" />
      <div className="flex flex-col">
        <Accordion title="Keshav's Wifi" icon={<Wifi />}>
          <div className="">
            <p className="p-1 px-5 hover:bg-slate-700">Select Network</p>
            <p className="p-1 px-5 hover:bg-slate-700">Power Off</p>
            <p className="p-1 px-5 hover:bg-slate-700">Wi-Fi Settings</p>
          </div>
        </Accordion>
        <Accordion title="Off" icon={<Bluetooth />}>
          <div className="">
            <p className="p-1 px-5 hover:bg-slate-700">Turn On</p>
            <p className="p-1 px-5 hover:bg-slate-700">Bluetooth Settings</p>
          </div>
        </Accordion>
        <Accordion
          title={`${
            isCharging ? 'Charging' : 'Remaining'
          } (${batteryLevelPercent}%)`}
          icon={
            <Battery
              className={
                isLow
                  ? 'text-orange-400'
                  : isCharging
                  ? 'text-green-400'
                  : 'text-white'
              }
            />
          }
        >
          <div className="">
            <p className="p-1 px-5 hover:bg-slate-700">Power Settings</p>
            <p className="p-1 px-5 hover:bg-slate-700">
              Status: {isCharging ? 'Charging ⚡' : 'Discharging 🔋'}
            </p>
          </div>
        </Accordion>
      </div>
      <hr className="my-2 h-px border-0 bg-gray-700" />
      <div className="flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800">
        <Settings />
        Settings
      </div>
      <div className="flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800">
        <Lock />
        Lock
      </div>
      <div className="flex flex-col">
        <Accordion title="Power Off / Log Out" icon={<PowerOff />}>
          <div className="">
            <p className="p-1 px-5 hover:bg-slate-700">Suspend</p>
            <p className="p-1 px-5 hover:bg-slate-700">Restart...</p>
            <p className="p-1 px-5 hover:bg-slate-700">Power Off</p>
            <hr className="my-2 h-px border-0 bg-gray-700" />
            <p className="p-1 px-5 hover:bg-slate-700">Log Out</p>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export { StatusCard };
