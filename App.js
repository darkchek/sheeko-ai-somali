
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";

const GOLD = "#FFC629";
const BG = "#050B19";

const genres = [
  "⚔️ Dagaal",
  "🧭 Tacabur",
  "👻 Naxdin",
  "🔥 Badbaado",
  "❤️ Jacayl",
  "✨ Sixir",
];

export default function App() {
  const [genre, setGenre] = useState("⚔️ Dagaal");
  const [scenes, setScenes] = useState(6);
  const [idea, setIdea] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.logo}>🎞️ SHEEKO <Text style={styles.gold}>AI</Text></Text>
        <Text style={styles.subtitle}>Somali</Text>
        <Text style={styles.tagline}>Abuur sheekooyin muuqaal filim leh</Text>

        <Text style={styles.heading}>Dooro nooca sheekada:</Text>
        <View style={styles.row}>
          {genres.map((g) => (
            <TouchableOpacity
              key={g}
              style={[styles.choice, genre === g && styles.active]}
              onPress={() => setGenre(g)}
            >
              <Text style={[styles.choiceText, genre === g && styles.darkText]}>{g}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.heading}>Tirada muuqaallada:</Text>
        <View style={styles.row}>
          {[6, 7, 8, 9, 10].map((n) => (
            <TouchableOpacity
              key={n}
              style={[styles.number, scenes === n && styles.active]}
              onPress={() => setScenes(n)}
            >
              <Text style={[styles.choiceText, scenes === n && styles.darkText]}>{n}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.heading}>Fikradda sheekada:</Text>
        <TextInput
          style={styles.input}
          placeholder="Tusaale: Wiil Muqdisho jooga oo helaya sir qarsoon..."
          placeholderTextColor="#91A4CC"
          value={idea}
          onChangeText={setIdea}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={() => {
          alert(idea.trim()
            ? `Nooca: ${genre}\nMuuqaallo: ${scenes}\nFikradda: ${idea}\n\nAI weli lama xirin.`
            : "Marka hore qor fikradda sheekada.");
        }}>
          <Text style={styles.buttonText}>✨ ABUUR SHEEKADA & SAWIRRADA</Text>
        </TouchableOpacity>

        <Text style={styles.note}>Sheekooyinkaaga halkan ayay ka muuqan doonaan.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },
  content: { padding: 20, paddingTop: 55 },
  logo: { color: "#FFFFFF", fontSize: 30, fontWeight: "900" },
  gold: { color: GOLD },
  subtitle: { color: GOLD, fontSize: 23, fontWeight: "bold" },
  tagline: { color: "#C4D0EB", marginTop: 8, marginBottom: 25 },
  heading: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 12 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  choice: { backgroundColor: "#101A30", borderColor: "#29395D", borderWidth: 1, borderRadius: 13, padding: 12, marginBottom: 5 },
  choiceText: { color: "#FFFFFF", fontWeight: "600" },
  active: { backgroundColor: GOLD, borderColor: GOLD },
  darkText: { color: "#111111" },
  number: { backgroundColor: "#101A30", borderColor: "#29395D", borderWidth: 1, borderRadius: 25, padding: 14, minWidth: 48, alignItems: "center" },
  input: { minHeight: 120, backgroundColor: "#0B1427", borderColor: "#30416A", borderWidth: 1, borderRadius: 14, padding: 15, color: "#FFFFFF", textAlignVertical: "top" },
  button: { marginTop: 22, backgroundColor: GOLD, borderRadius: 30, padding: 18, alignItems: "center" },
  buttonText: { color: "#111111", fontWeight: "900", textAlign: "center" },
  note: { color: "#A9BCE6", textAlign: "center", marginTop: 30, marginBottom: 40 },
});
