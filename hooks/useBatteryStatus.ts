import { useEffect, useState } from 'react';

export const useBatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    charging: false,
    level: 1,
    chargingTime: 0,
    dischargingTime: 0,
  });

  useEffect(() => {
    const getBattery = async () => {
      if (!(navigator as any).getBattery) {
        console.warn('Battery API not supported on this browser.');
        return;
      }

      const battery: any = await (navigator as any).getBattery();
      if (!battery) return;

      const updateBatteryInfo = () => {
        const info = {
          charging: battery.charging,
          level: battery.level,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime,
        };
        console.log('🔋 Updated Battery Info:', info);
        setBatteryInfo(info);
      };

      updateBatteryInfo();

      battery.addEventListener('chargingchange', updateBatteryInfo);
      battery.addEventListener('levelchange', updateBatteryInfo);

      return () => {
        battery.removeEventListener('chargingchange', updateBatteryInfo);
        battery.removeEventListener('levelchange', updateBatteryInfo);
      };
    };

    getBattery();
  }, []);

  return batteryInfo;
};
