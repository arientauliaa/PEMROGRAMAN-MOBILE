import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Title, RadioButton, Text } from 'react-native-paper';

export default function OrderScreen() {
  const [menu, setMenu] = useState('Espresso');
  const [step, setStep] = useState('order'); // order → confirm → payment
  const [paymentMethod, setPaymentMethod] = useState('Gopay');

  const handleOrder = () => {
    setStep('confirm');
  };

  const handleConfirm = () => {
    setStep('payment');
  };

  const handlePayment = () => {
    Alert.alert('Pembayaran Berhasil', `Pesanan ${menu} dibayar dengan ${paymentMethod}`);
    setStep('order'); // reset ke awal
  };

  return (
    <View style={styles.container}>
      {step === 'order' && (
        <>
          <Title style={styles.title}>Pilih Menu Kopi</Title>
          <RadioButton.Group onValueChange={value => setMenu(value)} value={menu}>
            {['Espresso', 'Cappuccino', 'Latte', 'Matcha', 'Choco', 'Choco Frappe', 'Arabica', 'Red Velvet', 'Vanilla Frappe', 'Matcha Frappe'].map(item => (
              <RadioButton.Item
                key={item}
                label={item}
                value={item}
                color="#512615"
                labelStyle={styles.radioLabel}
              />
            ))}
          </RadioButton.Group>
          <Button
            mode="contained"
            onPress={handleOrder}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Lanjutkan
          </Button>
        </>
      )}

      {step === 'confirm' && (
        <>
          <Title style={styles.title}>Konfirmasi Pesanan</Title>
          <Text style={styles.radioLabel}>Menu yang dipilih: <Text style={{ fontWeight: 'bold' }}>{menu}</Text></Text>
          <Button
            mode="contained"
            onPress={handleConfirm}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Lanjut ke Pembayaran
          </Button>
          <Button
            mode="text"
            onPress={() => setStep('order')}
            style={{ marginTop: 10 }}
          >
            Kembali
          </Button>
        </>
      )}

      {step === 'payment' && (
        <>
          <Title style={styles.title}>Metode Pembayaran</Title>
          <RadioButton.Group onValueChange={value => setPaymentMethod(value)} value={paymentMethod}>
            <RadioButton.Item label="Gopay" value="Gopay" color="#512615" labelStyle={styles.radioLabel} />
            <RadioButton.Item label="OVO" value="OVO" color="#512615" labelStyle={styles.radioLabel} />
            <RadioButton.Item label="DANA" value="DANA" color="#512615" labelStyle={styles.radioLabel} />
            <RadioButton.Item label="Transfer Bank" value="Bank" color="#512615" labelStyle={styles.radioLabel} />
          </RadioButton.Group>
          <Button
            mode="contained"
            onPress={handlePayment}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Bayar Sekarang
          </Button>
          <Button
            mode="text"
            onPress={() => setStep('confirm')}
            style={{ marginTop: 10 }}
          >
            Kembali
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f4e1',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#512615',
    marginBottom: 20,
  },
  radioLabel: {
    color: '#512615',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#512615',
  },
  buttonLabel: {
    color: '#ffffff',
  },
});
