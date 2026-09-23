// app/(tabs)/index.tsx
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Quote {
  content: string;
  author: string;
}

const FALLBACK_QUOTES: Quote[] = [
  {
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    content: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    content: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    content: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    content:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
];

export default function QuotesScreen() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch("https://api.quotable.io/random", {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Server returned an error.");
      }
      const data = await response.json();
      setQuote({
        content: data.content,
        author: data.author,
      });
    } catch (err) {
      const randomIndex = Math.floor(Math.random() * FALLBACK_QUOTES.length);
      setQuote(FALLBACK_QUOTES[randomIndex]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appHeader}>BEGINNER PROJECT</Text>
      <Text style={styles.appTitle}>Mini project : Quotes App</Text>

      <View style={styles.quoteCard}>
        <Text style={styles.cardHeaderTitle}>QUOTE OF THE DAY</Text>

        {loading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#00aced" />
            <Text style={styles.loadingText}>Loading quote...</Text>
          </View>
        ) : (
          <>
            <Text style={styles.quoteText}>{`"${quote?.content}"`}</Text>
            <Text style={styles.authorText}>— {quote?.author}</Text>
          </>
        )}

        <TouchableOpacity
          style={styles.newQuoteButton}
          onPress={fetchQuote}
          disabled={loading}
        >
          <Text style={styles.newQuoteButtonText}>NEW QUOTE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,
    paddingTop: 20,
    justifyContent: "center",
  },
  appHeader: {
    fontSize: 12,
    color: "#00aced",
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: 1,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  quoteCard: {
    backgroundColor: "#162447",
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1f4068",
    minHeight: 340,
    justifyContent: "space-between",
  },
  cardHeaderTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 16,
    textAlign: "center",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  loadingText: {
    color: "#aaa",
    marginTop: 10,
    fontSize: 14,
  },
  quoteText: {
    color: "#fff",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 15,
    lineHeight: 28,
  },
  authorText: {
    color: "#e4e4e4",
    fontSize: 15,
    textAlign: "right",
    fontWeight: "600",
    marginBottom: 20,
  },
  newQuoteButton: {
    backgroundColor: "#00b4d8",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  newQuoteButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1,
  },
});
