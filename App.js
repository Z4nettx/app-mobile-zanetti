import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Módulos do Expo
import * as Device from 'expo-device';
import { getLocales } from 'expo-localization';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  // 1. Estados e Referências
  const [image, setImage] = useState(null);
  const [facing, setFacing] = useState('back'); // Estado para controlar a direção da câmera ('back' ou 'front')
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  // 2. Informações do Dispositivo
  const nomeDispositivo = Device.deviceName || 'Desconhecido';
  const memoriaTotal = Device.totalMemory
    ? `${(Device.totalMemory / (1024 ** 3)).toFixed(2)} GB`
    : 'Não disponível';
  const nomeModelo = Device.modelName || 'Nenhum';
  const idioma = getLocales()[0]?.languageCode || 'pt';

  // 3. Verificação de Permissão da Câmera
  if (!permission) return <View style={styles.container} />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.textoMensagem}>Precisamos de acesso à sua câmera</Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  // 4. Funções da Câmera e Galeria
  const alternarCamera = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const tirarFoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
    }
  };

  const selecionarFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // 5. Interface Principal
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Aplicativo do Zanetti</Text>

      {/* ÁREA DA CÂMERA / PREVIEW DA FOTO */}
      <View style={styles.cameraBox}>
        {image ? (
          <View style={styles.previewContainer}>
            <Image source={{ uri: image }} style={styles.previewImage} />
            <Button title="Tirar outra foto" onPress={() => setImage(null)} color="#ff5252" />
          </View>
        ) : (
          <CameraView style={styles.camera} ref={cameraRef} facing={facing}>
            {/* Botão Superior para Inverter a Câmera */}
            <View style={styles.topBar}>
              <TouchableOpacity style={styles.btnInverter} onPress={alternarCamera}>
                <Text style={styles.btnInverterTexto}>🔄 Inverter ({facing === 'back' ? 'Traseira' : 'Frontal'})</Text>
              </TouchableOpacity>
            </View>

            {/* Controles de Foto e Galeria */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.btnCamera} onPress={tirarFoto}>
                <Text style={styles.btnTexto}>Tirar Foto</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnCamera} onPress={selecionarFoto}>
                <Text style={styles.btnTexto}>Galeria</Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        )}
      </View>

      {/* INFORMAÇÕES DO DISPOSITIVO */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTexto}>📱 Dispositivo: {nomeDispositivo}</Text>
        <Text style={styles.infoTexto}>💾 Memória Total: {memoriaTotal}</Text>
        <Text style={styles.infoTexto}>🏷️ Modelo: {nomeModelo}</Text>
        <Text style={styles.infoTexto}>🌐 Idioma: {idioma}</Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

// 6. Estilização
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cameraBox: {
    width: '100%',
    height: 380,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    padding: 10,
    alignItems: 'flex-end',
  },
  btnInverter: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  btnInverterTexto: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  btnCamera: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  btnTexto: {
    color: '#000',
    fontWeight: 'bold',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  previewImage: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    marginBottom: 10,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoTexto: {
    fontSize: 14,
    marginVertical: 4,
    color: '#333',
  },
  textoMensagem: {
    fontSize: 16,
    marginBottom: 10,
  }
});